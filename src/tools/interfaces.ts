import { AxiosErrorResponse } from "../util";

/** Main */
export interface ToolsState {
    editorMode: boolean;
    tool_bays: ToolBay[];
    tool_slots: ToolSlot[];
    tools: Tool[];
}

/** Related */
export interface ListAndFormProps {
    dispatch: Function;
    all: ToolsState;
}

export interface ToolBay {
    id: number;
    name: string;
}

export interface ToolBayFormState {
    x?: string;
    y?: string;
    z?: string;
    name?: string;
    tool_bay_id?: number;
}

export interface ToolFormState {
    name: string;
    slot_id?: number;
}

export interface ToolSlot {
    id: number;
    tool_bay_id: number;
    tool_id: number;
    created_at: string;
    x: number;
    y: number;
    z: number;
}

export interface AddToolSlotPayl {
    slotState: {
        name: string,
        x: number,
        y: number,
        z: number
    };
    bay_id: number;
}

export interface UpdateToolSlotPayl {
    slot_id: string;
    property: string;
    value: string;
}

export interface ToolPayl {
    name: string;
    slot_id: number;
}

export interface Tool {
    id: number;
    name: string;
}

/** Actions */
export interface SaveToolBaysOk {
    type: string;
    payload: {};
}

export interface SaveToolBayNameOk {
    type: string;
    payload: {};
}

export interface SaveToolBaysNo {
    type: string;
    payload: AxiosErrorResponse;
}

export interface SaveToolSlotsOk {
    type: string;
    payload: {};
}

export interface SaveToolSlotsNo {
    type: string;
    payload: AxiosErrorResponse;
}

export interface DestroySlot {
    type: string;
    payload: {};
}

export interface SaveToolsOk {
    type: string;
    payload: {};
}

export interface SaveToolsNo {
    type: string;
    payload: AxiosErrorResponse;
}

export interface DestroyTool {
    type: string;
    payload: {};
}
