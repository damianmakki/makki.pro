#!/usr/bin/env python3
import http.server
import gzip

BIN_FILE = '/Users/DMakki/.claude/projects/-Users-DMakki-Sites-ruckus-makki-pro/a2fa75ca-5d0b-4d83-988a-20b45d87979a/tool-results/webfetch-1776530467475-0wfb3e.bin'

class ProxyHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/design':
            try:
                with open(BIN_FILE, 'rb') as f:
                    raw = f.read()
                # Try to decompress as gzip
                try:
                    content = gzip.decompress(raw)
                except Exception:
                    content = raw
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(content)
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode())
        else:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            self.wfile.write(b'<a href="/design">View Design</a>')

    def log_message(self, format, *args):
        pass

if __name__ == '__main__':
    server = http.server.HTTPServer(('', 3001), ProxyHandler)
    print('Proxy running on port 3001')
    server.serve_forever()
