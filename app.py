from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/report')
def report():
    return render_template("report.html")

@app.route("/safety")
def safety():
    return render_template("safety.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)




        