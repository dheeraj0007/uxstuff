import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./backdrop";
import "./Modal.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const ModalOverlay = (props) => {
    const content = (
        <div className={`modal ${props.className} p-2`} style={props.style}>
            <header className={`modal__header ${props.headerClass} border-b pb-3 flex justify-between px-4`}>
                <h2><span className="font-bold">Aliana Sanchez </span>/ Product Designer</h2>
                <button>{props.footer}</button>
            </header>
            <div className="px-4 py-8 space-y-2 border-b">
                <h2 className="font-bold text-sm ">Who's doing all this work?</h2>
                <p className="text-xs">Believe it or not, all of our designs are done by one person - me, the founder of UXstuff! This means you'll get direct communication and personalized service, resulting in top-notch quality designs.</p>
            </div>

            <div className="px-4 py-6 space-y-2">
                <div className="flex bg-[#F0EFED66] p-2">
                    <img src="https://pic.onlinewebfonts.com/thumbnails/icons_39172.svg" alt="" className="w-6 mr-4" />
                    <p>@ux_curly</p>
                </div>
                <div className="flex bg-[#F0EFED66] p-2">
                    <img src="https://pic.onlinewebfonts.com/thumbnails/icons_134242.svg" alt="" className="w-6 mr-4" />
                    <p>@alianasanchez</p>
                </div>
                <div className="flex bg-[#F0EFED66] p-2">
                    <img src="https://pic.onlinewebfonts.com/thumbnails/icons_327938.svg" alt="" className="w-6 mr-4" />
                    <p>Work</p>
                </div>
                <div className="flex bg-[#F0EFED66] p-2">
                    <img src="https://pic.onlinewebfonts.com/thumbnails/icons_544741.svg" alt="" className="w-6 mr-4" />
                    <p>Portfolio</p>
                </div>
            </div>
            <form
                onSubmit={
                    props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
                }
            >
                <div className={`modal__content ${props.content}`}>
                    {props.children}
                </div>
            </form>
            <button class="bg-[#DF52FF] text-white font-bold py-2 px-4 rounded-full fixed bottom-4 right-4">
                <ChatBubbleOutlineIcon />
            </button>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};
const Modal = (props) => {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;
