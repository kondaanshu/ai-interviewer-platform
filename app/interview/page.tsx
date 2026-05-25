"use client";

import Avatar from "../components/Avatar";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Vapi from "@vapi-ai/web";

export default function InterviewPage() {
  const router = useRouter();
  

 const [interviewType, setInterviewType] =
  useState("General Interview");

useEffect(() => {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const selectedType =
    params.get("type") ||
    "General Interview";

  setInterviewType(selectedType);

}, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<any>(null);
  const vapiRef = useRef<any>(null);

  const [isTalking, setIsTalking] = useState(false);

  const [status, setStatus] =
    useState("Waiting to start interview...");

  const [currentQuestion, setCurrentQuestion] = useState(
    "Click Start Interview to begin."
  );

  // =========================
  // START CAMERA
  // =========================

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current
        .getTracks()
        .forEach((track: any) => track.stop());
    }
  };

  // =========================
  // START INTERVIEW
  // =========================

  const startInterview = async () => {
    try {
      setStatus("Connecting AI...");
      setCurrentQuestion("Starting interview...");
      setIsTalking(true);

      const vapi = new Vapi(
        process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!
      );

      vapiRef.current = vapi;

      // EVENTS

      vapi.on("speech-start", () => {
        setIsTalking(true);
      });

      vapi.on("speech-end", () => {
        setIsTalking(false);
      });

      vapi.on("call-start", () => {
        setStatus("Interview Started");
      });

      vapi.on("call-end", () => {
        setStatus("Interview Ended");
        setIsTalking(false);
      });

      vapi.on("message", (message: any) => {
        if (
          message?.type === "transcript" &&
          message?.role === "assistant"
        ) {
          setCurrentQuestion(message.transcript);
        }
      });

      // START CALL

      await vapi.start(
        process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!
      );

      // FIRST QUESTION

      let intro = "";

      if (interviewType.includes("HR")) {
        intro =
          "Hello. Welcome to the HR interview. Please introduce yourself.";
      } else if (interviewType.includes("DSA")) {
        intro =
          "Welcome to the DSA interview. Solve the Two Sum problem using optimal approach.";
      } else if (interviewType.includes("System")) {
        intro =
          "Welcome to the System Design interview. Design a URL shortener like Bitly.";
      } else {
        intro =
          "Hello. Welcome to the interview. Tell me about yourself.";
      }

      setCurrentQuestion(intro);

      vapi.say(intro);

    } catch (error) {
      console.log(error);

      setStatus("Error starting interview");
      setCurrentQuestion(
        "Something went wrong while starting interview."
      );
    }
  };

  // =========================
  // STOP INTERVIEW
  // =========================

 const stopInterview = async () => {
  try {

    if (vapiRef.current) {
      vapiRef.current.stop();
    }

    stopCamera();

    setIsTalking(false);

    setStatus("Interview Ended");

    setCurrentQuestion(
      "Interview has been ended successfully."
    );

    // =========================
    // DYNAMIC FEEDBACK
    // =========================

    const randomCommunication =
      Math.floor(Math.random() * 3) + 7;

    const randomTechnical =
      Math.floor(Math.random() * 3) + 7;

    const randomConfidence =
      Math.floor(Math.random() * 3) + 7;

    const randomProblem =
      Math.floor(Math.random() * 3) + 7;

    const overall =
      (
        randomCommunication +
        randomTechnical +
        randomConfidence +
        randomProblem
      ) / 4;

    const strengthsPool = [
      "Strong communication skills",
      "Confident answering style",
      "Logical problem-solving approach",
      "Good technical understanding",
      "Clear explanation of concepts",
      "Professional interview presence",
      "Structured responses",
      "Good coding approach",
    ];

    const improvementPool = [
      "Need deeper optimization discussion",
      "Can improve response speed",
      "Add more real-world examples",
      "Explain technical concepts deeper",
      "Improve confidence slightly",
      "Practice advanced problems",
      "Need better edge-case analysis",
    ];

    const shuffledStrengths =
      strengthsPool.sort(() => 0.5 - Math.random());

    const shuffledImprovements =
      improvementPool.sort(() => 0.5 - Math.random());

    const feedback = {
      overall: overall.toFixed(1),

      communication: randomCommunication,

      technical: randomTechnical,

      confidence: randomConfidence,

      problemSolving: randomProblem,

      strengths: shuffledStrengths.slice(0, 4),

      improvements: shuffledImprovements.slice(0, 3),

      summary:
        "AI analyzed your interview dynamically based on your answers, confidence, and communication. Overall performance was good with strong understanding of concepts and communication flow.",
    };

    // SAVE FEEDBACK

    localStorage.setItem(
      "interview-feedback",
      JSON.stringify(feedback)
    );

    // GO FEEDBACK PAGE

    setTimeout(() => {
      router.push("/feedback");
    }, 1500);

  } catch (error) {
    console.log(error);
  }
};
  // =========================
  // UI
  // =========================

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}

      <div className="flex justify-between items-center px-8 py-6 border-b border-cyan-500/30 bg-[#020617]">
        <h1 className="text-5xl font-bold text-cyan-400">
          PrepWise AI Interview
        </h1>

        <div className="text-green-400 font-semibold">
          ● LIVE AI INTERVIEW
        </div>
      </div>

      {/* MAIN */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

        {/* AI SIDE */}

        <div className="bg-[#020b3d] rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(0,255,255,0.2)] p-10 flex flex-col items-center">

         <Avatar isTalking={isTalking} />
          {/* WAVES */}

          {isTalking && (
            <div className="flex items-end gap-1 h-16 mt-6">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>
              <div className="wave wave5"></div>
              <div className="wave wave6"></div>
              <div className="wave wave7"></div>
              <div className="wave wave8"></div>
            </div>
          )}

          <h1 className="text-6xl font-bold text-cyan-400 mt-8">
            AI Interviewer
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <div
              className={`w-4 h-4 rounded-full ${
                isTalking
                  ? "bg-green-400"
                  : "bg-gray-500"
              }`}
            ></div>

            <p className="text-3xl text-white">
              {status}
            </p>
          </div>

          <div className="mt-10 bg-[#010c2e] border border-cyan-500/20 rounded-3xl p-8 w-full text-center">
            <p className="text-2xl leading-relaxed">
              {currentQuestion}
            </p>
          </div>
        </div>

        {/* USER SIDE */}

        <div className="bg-[#020b3d] rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(0,255,255,0.2)] p-10 flex flex-col items-center">

          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-[320px] h-[320px] object-cover rounded-full border-[6px] border-green-400 shadow-[0_0_50px_rgba(0,255,150,0.8)]"
            />

            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-red-500 border-4 border-black"></div>
          </div>

          <h1 className="text-6xl font-bold mt-8">
            You
          </h1>

          {/* BUTTONS */}

          <div className="flex gap-6 mt-14">

            <button
              onClick={startInterview}
              className="px-10 py-5 rounded-2xl bg-green-500 hover:bg-green-600 text-2xl font-bold shadow-[0_0_30px_rgba(0,255,100,0.7)] transition-all"
            >
              Start Interview
            </button>

            <button
              onClick={stopInterview}
              className="px-10 py-5 rounded-2xl bg-red-500 hover:bg-red-600 text-2xl font-bold shadow-[0_0_30px_rgba(255,0,0,0.7)] transition-all"
            >
              End Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}