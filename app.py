# Add these imports at the top
import sys
from flask import request

# Add this route before the if __name__ == '__main__': line
@app.route('/shutdown', methods=['POST'])
def shutdown():
    sys.exit(0)
    return 'Application closed'