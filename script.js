const button = document.querySelector('.button');
const message = document.querySelector('.message');

const rickRoll = '<!DOCTYPE html><html><head><title>YOU\'VE GOT RICKROLLED</title><style>* {padding: 0; margin: 0; box-sizing: border-box; overflow: hidden;} video {width: 100%; height: 100%}</style></head><body><video autoplay><source src="images/video.mp4" type="video/mp4"></video></body></html>';

let messageValues = ['I said, DO NOT CLICK THE BUTTON',
                     'Hey!!! Seriously... DO NOT CLICK IT',
                     'Okay... Happy now? Then STOP',
                     'DEAR GOD... STOP',
                     'Bad things can happen so please stop',
                     'If you click this again... YOU WILL REGRET IT'
];

var buttonClickCount = 0;

button.addEventListener("click", 
    function buttonClick(){
        if(buttonClickCount == 0){
            buttonClickCount++
            message.innerHTML = messageValues[0];
        }else if (buttonClickCount == 5){
            document.write(rickRoll);
        }else {
            buttonClickCount++
            message.innerHTML = messageValues[buttonClickCount];
        }

    }
);