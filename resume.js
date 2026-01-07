// Sample list of publications (you can fetch from JSON or API)

const rolesummary = [
     {
        image: "https://www.idsia.usi-supsi.ch/documents/43487559/19dc699c-8039-82e8-41dd-ed8e7819e601",
        institution: "IDSIA - Istituto Dalle Molle di Studi sull'Intelligenza Artificiale",
        role: "PostDoc",
        thesistopic: "",
        researchtopic: "Molecular Modelling",
        period: "2025 - Now",
        advisor: "Prof. Andrea Danani",
        advisorlink:"https://m3.dti.supsi.ch/",
        keywords: ""
    },

        {
        image: "https://www.unimore.it/themes/custom/unimore_base/icons/logo.svg",
        institution: "Università di Modena e Reggio Emilia",
        role: "PostDoc",
        thesistopic: "",
        researchtopic: "Mathematical modelling",
        period: "2024 - 2025",
        advisor: "Prof. Bortolotti Carlo Augusto",
        advisorlink:"https://www.healitalia.eu/healthy-toolbox/",
        keywords: ""
    },
            {
        image: "https://www.polito.it/themes/custom/polito_customizations/polito_logo_desktop.svg",
        institution: "Politecnico di Torino",
        role: "PhD in Biomedical Engineering and Surgical Sciences",
        thesistopic: "Insights Into the Molecular Mechanisms Driving Rare Neurodegenerative Diseases and Therapeutic Strategies Aided By In Silico Modelling",
        researchtopic: false,
        period: "2020 - 2024",
        advisor: "Prof. Marco Morbiducci",
        advisorlink:"https://www.polito.it/",
        keywords: ""
    },
            {
        image: "https://www.polito.it/themes/custom/polito_customizations/polito_logo_desktop.svg",
        institution: "Politecnico di Torino",
        role: "MSc in Biomedical Engineering",
        thesistopic: "Molecular Dynamics in Neurological Diseases",
        researchtopic: false,
        period: "2016 - 2019",
        advisor: "Prof. Marco Morbiducci",
        advisorlink:"https://www.polito.it/",
        keywords: ""
    },
    {
        image: "https://www.polito.it/themes/custom/polito_customizations/polito_logo_desktop.svg",
        institution: "Politecnico di Torino",
        role: "BSc in Biomedical Engineering",
        thesistopic: "Nano-electronics",
        researchtopic: false,
        period: "2013 - 2016",
        advisor: "Prof. Marco Morbiducci",
        advisorlink:"https://www.polito.it/",
        keywords: ""
    },
           

    
   
];



function renderRoleSummary(roleList) {
    const container = document.getElementById("role-list");

    roleList.forEach(role => {
        const li = document.createElement("li");
        if (role.researchtopic) {
                   li.innerHTML = `
<li>
    <div class="role-image">
        <img src="${role.image}">
    </div> 

    <div class="role-details">
        <div class="role-header">
            <div class="role-title">${role.institution} </div><div class="role-period"> // ${role.period}</div>
        </div>
        <div class="role-role">${role.role}</div>
        <div class="role-advisor"><a href="${role.advisorlink}" target="_blank"> Advisor:  ${role.advisor}</a></div>
    </div>
</li>
        `;
        } else if (role.thesistopic) {
        li.innerHTML = `
        <li>
    <div class="role-image">
        <img src="${role.image}">
    </div> 

    <div class="role-details">
        <div class="role-header">
            <div class="role-title">${role.institution} </div><div class="role-period"> // ${role.period}</div>
        </div>
        <div class="role-role">${role.role}</div>
        <div class="role-thesistopic">Thesis topic: ${role.thesistopic}</div>
    </div>
</li>
        `;
        }

        container.appendChild(li);
    });
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
    renderRoleSummary(rolesummary);
});
