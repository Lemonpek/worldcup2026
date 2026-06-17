from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
import json


SCORE_FEED_URL = "https://fixturedownload.com/feed/json/fifa-world-cup-2026"


class WorldCupHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if self.path.startswith("/api/scores"):
            self.proxy_scores()
            return
        super().do_GET()

    def proxy_scores(self):
        try:
            request = Request(
                SCORE_FEED_URL,
                headers={
                    "User-Agent": "WorldCupForecastApp/1.0",
                    "Accept": "application/json",
                },
            )
            with urlopen(request, timeout=15) as response:
                payload = response.read()
            # Validate JSON before returning it, so frontend gets a clear error shape if upstream changes.
            json.loads(payload.decode("utf-8"))
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(payload)
        except (HTTPError, URLError, TimeoutError, json.JSONDecodeError) as error:
            body = json.dumps({"error": "score_feed_unavailable", "detail": str(error)}).encode("utf-8")
            self.send_response(502)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 4173), WorldCupHandler)
    print("WorldCup app server running at http://127.0.0.1:4173/")
    server.serve_forever()
