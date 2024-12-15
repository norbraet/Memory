import cv2

class CameraService:
    def __init__(self):
        # Initialize the camera (default device index is 0)
        self.cap = cv2.VideoCapture(0)
        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)
        self.cap.set(cv2.CAP_PROP_FPS, 30)

    def capture_frame(self):
        # Capture a frame from the camera
        ret, frame = self.cap.read()
        if not ret:
            raise RuntimeError("Failed to capture frame from camera")
        return frame

    def release_camera(self):
        # Release the camera resource
        self.cap.release()
