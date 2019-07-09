from flask import Flask,render_template

app = Flask(__name__)


@app.route('/')
def load_main_page():
    return render_template('mainpage.html')


@app.route('/game')
def load_game_page():
    return render_template('')


if __name__ == '__main__':
    app.run()
