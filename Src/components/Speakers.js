import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

const Speakers = () => {
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakersToolbar />
      <SpeakersList></SpeakersList>
    </SpeakerFilterProvider>
  );
};

export default Speakers;
