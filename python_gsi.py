from flask import Flask, jsonify, request
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/gsi", methods=['POST'])
def gsi():
    content =  request.get_json()
    print  content
    return "Hello World!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
