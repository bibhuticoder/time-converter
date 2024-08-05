import { useEffect, useState } from "react"
import DefaultLayout from "../layouts/default.layout"
import { getAnswer } from "../helpers/gemini.helper";
import { speak } from "../helpers/speech.helper";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import ScriptItemCard from "../components/ScriptItem";
import { ScriptItem } from "../interfaces";
import { ScriptItemType } from "../enums";
import { fetchImage } from "../helpers/unsplash.helper";
import Demo from "../components/Demo";
import { fetchVideo } from "../helpers/pexels.helper";

function ReportsPage() {
  const [script, setScript] = useState<ScriptItem[]>([])

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      const scriptItems = await getAnswer(e.currentTarget.value) as ScriptItem[]

      for (let i = 0; i < scriptItems.length; i++) {
        const scriptItem = scriptItems[i];
        // if (scriptItem.type === ScriptItemType.IMAGE) {
        //   const imageUrl = await fetchVideo(scriptItem.keywords ? scriptItem.keywords.join(",") : null)
        //   console.log(imageUrl)
        //   if (imageUrl) scriptItems[i].content = imageUrl
        // }
      }
      // console.log(scriptItems)

      setScript(scriptItems)
    }
  }

  return (
    <DefaultLayout>
      <div className="container">

        <div className="p-4 my-2 bg-white rounded-md">
          <h1 className="">Tell me your ideas</h1>
          <div className="rounded-md border-2 border-gray-400 w-full p-1 mb-8">
            <textarea
              className="w-full bg-transparent p-2 outline-none resize-none"
              rows={2}
              onKeyDown={handleKeyDown}
              defaultValue={"Massive use of fertilizers has reduced the quality of soil. If this goes on, it will probably destroy our planet"}></textarea>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-white p-4 rounded-md flex-1">
            {script ? <div className="flex flex-col gap-2">
              {script.map((s: ScriptItem, i) => <ScriptItemCard key={i} scriptItem={s} />)}
            </div> : null}
          </div>

          <div className="flex-1 bg-white rounded-md p-2">
            {script && script.length ? <Demo scriptItems={script} /> : null}
          </div>

        </div>
      </div>
    </DefaultLayout>
  )
}

export default ReportsPage
