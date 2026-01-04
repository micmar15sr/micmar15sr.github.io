// Sample list of publications (you can fetch from JSON or API)

const publications = [
    {
        image: "./Portfolio/assets/paper_img/jmgm2026.jpg",
        title: "Explainable Machine Learning and Deep Learning Models for Predicting TAS2R-Bitter Molecule, Interactions",
        authors: "Ferri F., Cannariato M., Pallante L., Zizzi E. A., Miceli M., Deriu M. A.",
        journal: "Journal of Molecular Graphics and Modelling, 2026",
        doi: "doi:10.1016/j.jmgm.2025.109187"
    },
    {
        image: "./Portfolio/assets/paper_img/acsomg2025.jpeg",
        title: "Molecular Insights into IAHSP: Influence of the R1611W Mutation on the VPS9 Domain of Alsin",
        authors: "Miceli M., Exertier, C., Gugole, E., Vallone, B., Deriu, M. A.",
        journal: "ACS Omega, 2025",
        doi: "doi:10.1021/acsomega.5c05926"
    },
    {
        image: "./Portfolio/assets/paper_img/interface2025.png",
        title: "Architecture-encoded mechanics and communication in microtubules: a multiscale computational study",
        authors: "Zizzi E. A., Cannariato M., Miceli M. Morbiducci U., Deriu M. A.",
        journal: "The Royal Society Publishing: INTERFACE, 2025",
        doi: "doi:10.1098/rsif.2025.0556"
    },
    {
        image: "./Portfolio/assets/paper_img/fmolb2024.png",
        title: "Exploring TAS2R46 Biomechanics through Molecular Dynamics and Network Analysis",
        authors: "Cannariato, M., Fanunza, R., Zizzi, E. A., Miceli, M., Di Benedetto, G., Deriu, M. A., Pallante, L.",
        journal: "Front. Mol. Biosci., 2024",
        doi: "doi:10.3389/fmolb.2024.1473675"
    },
    {
        image: "./Portfolio/assets/paper_img/prot2024.png",
        title: "Conformational Dynamics and Molecular Characterization of Alsin MORN Monomer and Dimeric Assemblies",
        authors: "Miceli M., Cannariato M., Tortarolo, R., Pallante, L., Zizzi, E. A., Deriu, M. A.",
        journal: "Proteins: structure, functions bioninformatics, 2024",
        doi: "doi:10.1002/prot.26728"
    },
    {
        image: "./Portfolio/assets/paper_img/chbr2024.jpg",
        title: "Inside the gamer's mind: How violent video games and emotional dysregulation affect EEG interbrain synchronization",
        authors: "Veneziani G., Luciani F., Miceli M., Spallaccini S., Galli F., Pezzuti L., Lai C.",
        journal: "Computers in Human Behavior Reports, 2024",
        doi: "doi:10.1016/j.chbr.2024.100509"
    },
    {
        image: "./Portfolio/assets/paper_img/bmm2023.png",
        title: "Mechanical communication within the microtubule through network-based analysis of tubulin dynamics",
        authors: "Cannariato M, Zizzi EA, Pallante L, Miceli M, Deriu MA",
        journal: "Biomech Model Mechanobiol, 2023",
        doi: "doi:10.1007/s10237-023-01792-5"
    },
    {
        image: "./Portfolio/assets/paper_img/bpj2022.jpg",
        title: "Toward the design and development of peptidomimetic inhibitors of the Ataxin-1 aggregation pathway",
        authors: "Miceli, M., Deriu, M. A., Grasso, G.",
        journal: "Biophysical Journal, 2022",
        doi: "doi:10.1016/j.bpj.2022.10.021"
    },
    {
        image: "./Portfolio/assets/paper_img/fnmoln2022.webp",
        title: "Prediction of Protein–Protein Interactions Between Alsin DH/PH and Rac1 and Resulting Protein Dynamics",
        authors: "Cannariato M, Miceli M., Cavaglià M, Deriu MA",
        journal: "Front. Mol. Neurosci., 2022",
        doi: "doi:10.3389/fnmol.2021.772122"
    },
    {
        image: "./Portfolio/assets/paper_img/pone2022.png",
        title: "In silico investigation of Alsin RLD conformational dynamics and phosphoinositides binding mechanism",
        authors: "Cannariato M, Miceli M, Deriu MA",
        journal: "PLoS ONE, 2022",
        doi: "doi:10.1371/journal.pone.0270955"
    },
    {
        image: "./Portfolio/assets/paper_img/mdpibio2022.png",
        title: "ALS2-Related Motor Neuron Diseases: From Symptoms to Molecules",
        authors: "Miceli, M., Exertier, C., Cavaglià, M., Gugole, E., Boccardo, M., Casaluci, R.R., Ceccarelli, N., De Maio, A., Vallone, B., Deriu, M.A.",
        journal: "Biology, 2022",
        doi: "doi:10.3390/biology11010077"
    },
    {
        image: "./Portfolio/assets/paper_img/jmc2021.jpg",
        title: "Noncovalent Interactions with PAMAM and PPI Dendrimers Promote the Cellular Uptake and Photodynamic Activity of Rose Bengal: The Role of the Dendrimer Structure",
        authors: "Sztandera K, Gorzkiewicz M, Dias Martins AS, Miceli M., et al.",
        journal: "J Med Chem., 2021",
        doi: "doi:10.1021/acs.jmedchem.1c01080"
    },
    {
        image: "./Portfolio/assets/paper_img/jmgm2020.jpg",
        title: "Ultrasonic waves effect on S-shaped b-amyloids conformational dynamics by non-equilibrium molecular dynamics",
        authors: "Miceli M., Muscat S., Morbiducci M, Cavaglià M., Deriu M.A.",
        journal: "Journal of Molecular Graphics and Modelling, 2020",
        doi: "doi:10.1016/j.jmgm.2019.107518"
    }
];



function renderPublications(pubList) {
    const container = document.getElementById("publications-list");

    pubList.forEach(pub => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="publication-image"><img src="${pub.image}" alt="${pub.title}"></div> 
            <div class="publication-title">${pub.title}</div>
            <div class="publication-authors">${pub.authors}</div>
            <div class="publication-journal">${pub.journal}</div>
            <div class="publication-doi"><a href="https://doi.org/${pub.doi}" target="_blank">DOI: ${pub.doi}</a></div>
        `;

        container.appendChild(li);
    });
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
    renderPublications(publications);
});
