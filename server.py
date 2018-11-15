from flask import Flask, render_template, jsonify
from random import *
#app = Flask(__name__, template_folder='./dist', static_folder = './dist/static')
#to make work: change location of js files within dist to be script
#in INDEX.HTML make src='static/test.js'
app = Flask(__name__, template_folder='./dist', static_folder = './dist/static')

@app.route('/')
def start():
    return render_template("index.html")    
if __name__ == '__main__':
    print("hello")
    app.run(host='127.0.0.1', port=5000, debug=True)