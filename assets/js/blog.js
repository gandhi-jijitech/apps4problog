console.log("matchMedia", matchMedia)
if (matchMedia) {
    console.log("matchMedia", matchMedia)
    const mq = window.matchMedia("(max-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}


function WidthChange(mq) {
    var iframe = document.getElementById("footeriframe")
    if (mq.matches) {
        console.log("Mq", mq)

        var scrollHeight = iframe.scrollHeight;
        var clientHeight = iframe.clientHeight;
        iframe.height = scrollHeight + clientHeight + 20+"px";
    } else {
        iframe.height = 460 + "px";
    }

}