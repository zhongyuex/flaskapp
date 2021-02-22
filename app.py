from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = request.form
        min1 = form['min1']
        max1 = form['max1']
        return render_template('index.html', display='the range was ' + min1 + ';' + max1, pageTitle='myFlaskApp')

    return render_template('index.html', display='', pageTitle='myFlaskApp')

if __name__ == '__main__':
    app.run(debug=True)