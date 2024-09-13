import { faker } from "@faker-js/faker";

function Student(props) {
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-2">
          <img src={faker.image.avatar()} className="w-100 py-2" alt=""></img>
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Coding Experience {props.experience} years
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
}

export default Student;
