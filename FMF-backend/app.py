# This file will be the entry point to run the Flask application.

from app import create_app

app = create_app()

if __name__ == '__main__':
    port_value = os.environ.get("PORT", "10000")
    app.run(debug=True, host="0.0.0.0", port=port_value)
