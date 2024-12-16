import cv2

class CameraService:
    def __init__(self):
        self.cap = cv2.VideoCapture('/dev/video0', cv2.CAP_V4L2)

        if not self.cap.isOpened():
            raise RuntimeError("Error: Could not open camera.")

        self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
        self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)
        self.cap.set(cv2.CAP_PROP_FPS, 30)

        print("Camera initialized successfully")

    def capture_frame(self):
        ret, frame = self.cap.read()
        if not ret:
            raise RuntimeError("Failed to capture frame from camera")
        return frame

    def release_camera(self):
        self.cap.release()
        print("Camera released")

    def test_camera_feed(self):
        while True:
            frame = self.capture_frame()

            cv2.imshow("Camera Feed", frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        
        self.release_camera()
        cv2.destroyAllWindows()


