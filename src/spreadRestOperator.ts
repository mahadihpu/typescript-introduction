const bros: string[] = ["Atik", "Irfan", "Faysal", "Moinul"];

const AllBros: string[] = [...bros, "Mridul", "Nashid", "Tamim"]


const developers = {
    frontEnd: "Tanveer",
    backend: "Rayhan",
    fullStack: "Rahul",
    deluge: "Towmir"
};

const support = {
    wordpress: "Shawon",
    ui: "Polash",
    digitalMarketing: "Nasir"
};


const instawebworks = {
    ...developers,
    ...support
}