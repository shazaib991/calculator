import { useState } from "react";
import "./calculator.css";

function Calculator() {
    const [currentOperand, setCurrentOperand] = useState("");
    const [previousOperand, setPreviousOperand] = useState("");
    const [output, setOutput] = useState("");

    const updateOperand = (e) => {
        if (e.target.innerText === "." && currentOperand.includes(".")) {
            return;
        }
        if (output !== "") {
            setOutput("");
        }
        if (
            e.target.innerText === "/" ||
            e.target.innerText === "+" ||
            e.target.innerText === "-" ||
            e.target.innerText === "*"
        ) {
            if (output) {
                setPreviousOperand(output + " " + e.target.innerText);
                return;
            }
            if (
                previousOperand.includes("/") ||
                previousOperand.includes("-") ||
                previousOperand.includes("+") ||
                previousOperand.includes("*")
            ) {
                setPreviousOperand(
                    eval(previousOperand + currentOperand) +
                        " " +
                        e.target.innerText
                );
                setCurrentOperand(eval(previousOperand + currentOperand));
                return;
            }
            setPreviousOperand(currentOperand + " " + e.target.innerText);
            setCurrentOperand(" ");
            return;
        }
        setCurrentOperand(currentOperand + e.target.innerText);
    };

    const calculate = () => {
        setOutput(eval(previousOperand + currentOperand));
        setPreviousOperand("");
        setCurrentOperand(" ");
    };

    const clearAll = () => {
        setOutput("");
        setCurrentOperand("");
        setPreviousOperand("");
    };

    const deleteCharacter = () => {
        setCurrentOperand(
            currentOperand.substring(0, currentOperand.length - 1)
        );
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="output">
                    <div className="previous-operand">
                        {previousOperand || ""}
                    </div>
                    <div className="current-operand">
                        {output || currentOperand || 0}
                    </div>
                </div>
                <button className="span-two" onClick={clearAll}>
                    AC
                </button>
                <button onClick={deleteCharacter}>DEL</button>
                <button onClick={updateOperand}>/</button>
                <button onClick={updateOperand}>1</button>
                <button onClick={updateOperand}>2</button>
                <button onClick={updateOperand}>3</button>
                <button onClick={updateOperand}>*</button>
                <button onClick={updateOperand}>4</button>
                <button onClick={updateOperand}>5</button>
                <button onClick={updateOperand}>6</button>
                <button onClick={updateOperand}>+</button>
                <button onClick={updateOperand}>7</button>
                <button onClick={updateOperand}>8</button>
                <button onClick={updateOperand}>9</button>
                <button onClick={updateOperand}>-</button>
                <button onClick={updateOperand} className="button-border-dot">
                    .
                </button>
                <button onClick={updateOperand}>0</button>
                <button
                    className="span-two button-border-equals"
                    onClick={calculate}
                >
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;
