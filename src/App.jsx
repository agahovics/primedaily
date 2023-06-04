import './App.css';

import { InputText } from 'primereact/inputtext';
import { Rating } from "primereact/rating";
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    return (

        <div className="container">
            <div className="logo">
                <h1>PRIME</h1>
                <h2>DAILY</h2>
            </div>

            <div className="circle"></div>
            <div className="circle-left"></div>
            <div className="container2">
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Who are you?</label>
                    <InputText id="username"
                        value={name} onChange={(e) => {
                            setName(e.target.value);
                        }}
                        aria-describedby="username-help" />
                </div>

                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Mood</label>
                    <Rating value={2} cancel={false} className="mt-3" />
                </div>

                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Are there any blocker?</label>
                    <span className="p-buttonset">
                        <Button
                            label="No"
                            severity="secondary"
                            style={{
                                borderColor: "#ced4da",
                            }}
                            size="small"
                            outlined
                        />
                        <Button
                            label="Yes"
                            style={{
                                borderColor: "#ced4da",
                            }}
                            severity="secondary"
                            size="small"
                            outlined
                        />
                    </span>
                </div>
            </div>

            <div className="flex gap-4 mt-5">
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">What did you do yesterday?</label>
                    <InputTextarea rows={4} cols={30} />
                </div>{" "}
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">What  do you plan for today?</label>
                    <InputTextarea rows={4} cols={30} />
                </div>
            </div>

            <div className="mt-5 w-full">
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Do you have a problem?If there is, would you like to tell?</label>
                    <InputTextarea
                        rows={4}
                        cols={30}
                        style={{
                            width: "100%",
                        }}
                    />
                </div>
            </div>

            <div className="mt-5">
                <Button label="Submit" rounded disabled={name.length <= 0} />
            </div>
        </div>



    )
}



export default App
