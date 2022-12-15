import { ifStmt } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true },
  ];

  constructor() {}

  ngOnInit() {}

  add(memberName: string, isFirst: boolean) {
    this.crew.push({ name: memberName, firstMission: isFirst });
  }
  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
  memberBeingEdited: object = null;

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member["name"] = name;
    this.memberBeingEdited = null;
  }
  duplicateCrew(person: object) {
    if (!this.crew.includes(person)) {
      this.crew.push(person);
    }
  }
}
