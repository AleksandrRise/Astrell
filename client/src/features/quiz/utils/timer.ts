import type { Dispatch, SetStateAction } from "react";

export function timer(
    h: number,
    setHours: Dispatch<SetStateAction<number>>,
    m: number, 
    setMins: Dispatch<SetStateAction<number>>,
    s: number,
    setSecs: Dispatch<SetStateAction<number>>
) {

    if (h < 0 && m < 5) {
        console.log("orange!")
    }
    if (h < 0 && m < 1) {
        console.log("red!!!")
    }


}