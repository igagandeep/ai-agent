import Form from "next/form";
import { AnalyseButton } from "./AnalyseButton";
import { analyseYoutubeVideo } from "@/actions/analyseYoutubeVideo";
const YoutubeVideoForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form
        action={analyseYoutubeVideo}
        className="flex flex-col sm:flex-row gap-2 items-center"
      >
        <input
          type="text"
          placeholder="Enter Your YouTube URL"
          className="w-full px-4 py-2 text-gray-700 ring-1 ring-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                   focus:border-transparent transition-all duration-200"
        />

        <AnalyseButton />
      </Form>
    </div>
  );
};

export default YoutubeVideoForm;
