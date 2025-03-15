from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
@app.route('/index.html')
def home():
    return render_template('index.html')

@app.route('/about-us.html')
def about():
    return render_template('about-us.html')

@app.route('/choose-us.html')
def advantage():
    return render_template('choose-us.html')

@app.route('/contact-us.html')
def member():
    return render_template('contact-us.html')

@app.route('/services.html')
def trainer():
    return render_template('services.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/registration.html')
def registration():
    return render_template('registration.html')

if __name__ == '__main__':
    app.run(debug=True)
