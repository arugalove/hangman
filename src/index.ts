type Person = {
    name: string;
}

export const greetPerson = (person: Person): string => "hello " + person.name + '!';