from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def load_main_page():
    # return render_template('mainpage.html')
    return render_template('roboczy.html')


@app.route('/game')
def game():
    return render_template('game.html')


@app.route('/win')
def win():
    return render_template('win.html')


if __name__ == '__main__':
    app.run(debug=True)
