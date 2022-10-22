import React, {useState} from "react";

type EditableSpanPropsType = {
    title: string
    editMode: boolean
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(true);

    const activateEditMode = () => setEditMode(true)
    const activateViewMode = () => setEditMode(false)


    return editMode
        ? <input value={props.title} onBlur={activateViewMode} autoFocus />
        : <span onDoubleClick={activateEditMode}>{props.title}****</span>
}