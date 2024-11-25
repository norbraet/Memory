import unittest
from app import create_app

class TestApp(unittest.TestCase):
    def setup(self):
        self.app = create_app()
        self.client = self.app.test_client()

    def test_index(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_led_on(self):
        response = self.client.get('/on')
        self.assertEqual(response.staus_code, 200)

    def test_led_off(self):
        response = self.client.get('/off')
        self.assertEqual(response.staus_code, 200)

if __name__ == "__main__":
    unittest.main()