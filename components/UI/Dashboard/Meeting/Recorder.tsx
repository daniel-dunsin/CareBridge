import Button from "@/components/Common/Button";
import { useRef, useState } from "react";

const ScreenRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  // Start recording function
  const startRecording = async () => {
    try {
      // Get screen stream (for video) and user media (for audio)
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true, // For system audio if available
      });

      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true, // For microphone audio
      });

      // Combine the screen and audio stream
      const combinedStream = new MediaStream([...screenStream.getTracks(), ...audioStream.getTracks()]);

      // Setup MediaRecorder
      mediaRecorderRef.current = new MediaRecorder(combinedStream, {
        mimeType: "video/webm", // Format for recording
      });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      mediaRecorderRef.current.start(); // Start recording
      setRecording(true);
    } catch (err) {
      console.error("Error starting screen recording:", err);
    }
  };

  // Stop recording and download the file
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop(); // Stop the recording
      setRecording(false);

      // Handle saving the file
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      a.download = "recording.webm"; // Filename for the downloaded file
      a.click();
      window.URL.revokeObjectURL(url); // Cleanup the URL
    }
  };

  return (
    <div>
      <h1>Screen Recorder</h1>
      {!recording ? (
        <Button onClick={startRecording}>Start Recording</Button>
      ) : (
        <Button onClick={stopRecording}>Stop & Download Recording</Button>
      )}
    </div>
  );
};

export default ScreenRecorder;
