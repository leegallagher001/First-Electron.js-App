function updateCalendar () {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const monthNames = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];
    const month = monthNames[now.getMonth()];

    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;
};

updateCalendar();