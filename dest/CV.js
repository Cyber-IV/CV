"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skillsService_1 = __importDefault(require("./services/skillsService"));
const skillService = new skillsService_1.default();
const skills = skillService.getSkills();
console.log('Todos los skills:', skills);
