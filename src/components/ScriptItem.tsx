import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { speak } from "../helpers/speech.helper";
import { ScriptItem } from "../interfaces";
import { ScriptItemType } from "../enums";
import { divide } from "lodash";

interface ScriptItemCardProps {
    scriptItem: ScriptItem
}

function ScriptItemCard({ scriptItem }: ScriptItemCardProps) {

    const fetchImage = async (keyword: string | null) => {
        if (keyword) await fetchImage(keyword)
    }

    const UI = {
        [ScriptItemType.IMAGE]: <div className="flex gap-2">
            {scriptItem.keywords?.map((k, i) => <div key={i} className="text-white bg-purple-900 px-2 py-1 rounded-md text-sm">{k}</div>)}
        </div>,

        [ScriptItemType.TEXT]: <>
            {scriptItem.content ? <div className="flex gap-2 items-center py-2">
                <p className="mb-0" dangerouslySetInnerHTML={{ __html: scriptItem.content.replaceAll("<s>", '<span class="highlight">').replaceAll("</s>", "</span>") }}></p>
                <button onClick={() => speak(scriptItem.content ? scriptItem.content.replaceAll("<s>", '').replaceAll("</s>", "") : "")}>
                    <HiOutlineSpeakerWave />
                </button>
            </div> : null}
        </>
    }
    return <div className="border border-gray-200 p-2 rounded">
        {UI[scriptItem.type]}
    </div>
}

export default ScriptItemCard