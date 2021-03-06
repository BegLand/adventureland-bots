/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

use_skill("town") // Try to teleport to town for safety

import("https://earthiverse.github.io/adventureland-bots/build/priest.js")
    .then(() => {
        bots.priest.run()
    }, () => {
        load_code("priest")
        bots.priest.run()
    })

function on_party_invite(name) {
    if (name != "earthiverse") return
    accept_party_invite(name)
}

function on_cm(name, data) {
    bots.priest.parseCM(name, data)
}

function on_magiport(name) {
    if (name != "earthMag") return
    accept_magiport(name)
}