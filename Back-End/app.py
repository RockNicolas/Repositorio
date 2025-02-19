import subprocess
from flask import Flask
from flask_cors import CORS 
import os

app = Flask(__name__)
CORS(app)  

@app.route('/run-snake-game', methods=['GET'])
def run_snake_game():
    try:
        snake_game_path = os.path.join(os.getcwd(), 'back-end', 'snake.py')
        result = subprocess.run(['python', snake_game_path], capture_output=True, text=True) 
        return {
            'message': 'Jogo executado com sucesso!',
            'output': result.stdout,
            'error': result.stderr
        }
    except Exception as e:
        return {'error': str(e)}

if __name__ == '__main__':
    app.run(debug=True)
