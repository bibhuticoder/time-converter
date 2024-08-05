import { useEffect, useState } from "react"
import { ScriptItem } from "../interfaces"
import { speak, speakAsync } from "../helpers/speech.helper"
import { ScriptItemType } from "../enums"

interface DemoProps {
    scriptItems: ScriptItem[]
}

function Demo({ scriptItems }: DemoProps) {
    const [currentImage, setCurrentImage] = useState<string>()
    const [currentText, setCurrentText] = useState<string>()

    useEffect(() => {
        for (let i = 3; i < scriptItems.length; i++) {
            const scriptItem = scriptItems[i];
            if (scriptItem.type === ScriptItemType.IMAGE) {
                setCurrentImage(scriptItem.content)
            } else {
                setCurrentText(scriptItem.content?.replaceAll("<s>", '<span class="highlight">').replaceAll("</s>", "</span>"))
            }
        }
    }, [])

    const playScript = async () => {

        for (let i = 0; i < scriptItems.length; i++) {
            const scriptItem = scriptItems[i];
            if (scriptItem.type === ScriptItemType.IMAGE) {
                setCurrentImage(scriptItem.content)
            } else {
                setCurrentText(scriptItem.content?.replaceAll("<s>", '<span class="highlight">').replaceAll("</s>", "</span>"))
                const text = scriptItem.content?.replaceAll("<s>", '').replaceAll("</s>", "")
                await speakAsync(text)
            }
        }
    }

    return <>
        <div className="flex flex-col h-full">
            <div className="flex">
                <button onClick={playScript}>Play</button>
            </div>

            {currentImage && currentText ? <div style={{ backgroundImage: `url(${currentImage})` }} className="w-full flex-1 bg-cover bg-gray-400 relative">
                <p className="subtitle w-10/12 text-center leading-12 drop-shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-gray-200 font-bold" dangerouslySetInnerHTML={{ __html: currentText }}></p>
            </div> : null}

        </div>
    </>
}

export default Demo