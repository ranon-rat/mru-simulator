await (async function main() {
  const buttons = [
    {
      divId: "varsButtons",
      content: [
        { id: "velocity", name: "Velocity", value: 125, disable: false },
        { id: "distance", name: "Distance", value: 500, disable: false }
      ]
    },
    {
      divId: "valsButtons",
      content: [
        { id: "currentDistance", name: "Current distance", value: 0, disable: true },
        { id: "timeElapsed", name: "Time elapsed", value: 0, disable: true }
      ]
    }
  ];

  for (const entries of buttons) {
    const { content, divId } = entries;
    const div = document.getElementById(divId)!;

    for (const { disable, id, name, value } of content) {
      const disableIf = disable ? "disabled" : "";

      div.innerHTML +=`
        <div class="button">
          <p>${name}</p>
          <input type="number" id="${id}" placeholder="${name}" value="${value}" ${disableIf} />
        </div>
      `;
    }
  }
})();

export {};