const members = [
    {
        name: "Nombre 1",
        role: "Ingeniero de IA",
        specialization: "Especialización 1",
        motivation: "Motivación 1",
        skills: "Habilidades 1",
        contribution: "Aporte 1",
        vision: "Visión 1",
        quote: "Frase inspiradora 1"
    },
    {
        name: "Nombre 2",
        role: "Ingeniero de Software",
        specialization: "Especialización 2",
        motivation: "Motivación 2",
        skills: "Habilidades 2",
        contribution: "Aporte 2",
        vision: "Visión 2",
        quote: "Frase inspiradora 2"
    },
    // Agrega los demás miembros aquí...
];

let currentMemberIndex = 0;

function openModal(index) {
    currentMemberIndex = index;
    const member = members[index];
    document.getElementById("modal-name").innerText = member.name;
    document.getElementById("modal-role").innerText = member.role;
    document.getElementById("modal-specialization").innerText = member.specialization;
    document.getElementById("modal-motivation").innerText = member.motivation;
    document.getElementById("modal-skills").innerText = member.skills;
    document.getElementById("modal-contribution").innerText = member.contribution;
    document.getElementById("modal-vision").innerText = member.vision;
    document.getElementById("modal-quote").innerText = member.quote;
    document.getElementById("modal").style.display = "block";
    document.getElementById("click-sound").play();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function nextMember() {
    currentMemberIndex = (currentMemberIndex + 1) % members.length;
    openModal(currentMemberIndex);
}
