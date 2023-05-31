require("./mongodb");
const mongoose = require("mongoose");
const subModel = require("../models/subModel");
const subs = require("./subs.json");

async function loadData() {
    try {
        await subModel.deleteMany({});
        for (const sub of subs) {
            await subModel.create(sub);
        }
        console.log("Carga de cadastros feita!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

loadData();