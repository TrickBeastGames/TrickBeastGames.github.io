const models = {
    thomson: {
      title: "Thomson Model",
      description: "The atom is a sphere of positive charge with electrons embedded like raisins in pudding.",
      limitations: "Could not explain the results of Rutherford's gold foil experiment.",
      successes: "Discovery of the electron.",
      evidence: "Cathode ray tube experiments.",
      problem: {
        description: "If an electron has a charge of -1.6 × 10⁻¹⁹ C, what is the charge of 10 electrons?",
        correctAnswer: -1.6e-18,
      },
    },
    rutherford: {
      title: "Rutherford Model",
      description: "Atoms consist of a dense, positively charged nucleus surrounded by electrons in empty space.",
      limitations: "Could not explain electron stability or spectral lines.",
      successes: "Discovery of the nucleus.",
      evidence: "Gold foil experiment.",
      problem: {
        description: "Calculate the force between two protons 1 × 10⁻¹⁵ m apart. (k = 9 × 10⁹ N·m²/C²)",
        correctAnswer: 230.4,
      },
    },
    bohr: {
        title: "Bohr Model",
        description: "Electrons occupy fixed energy levels around the nucleus.",
        limitations: "Only works well for hydrogen-like atoms.",
        successes: "Explains spectral lines of hydrogen.",
        evidence: "Hydrogen emission spectrum.",
        problem: {
          description: "A photon has a frequency of 5 × 10¹⁴ Hz. Calculate its energy using E = hf. (h = 6.626 × 10⁻³⁴ J·s)",
          correctAnswer: 3.313e-19,
      },
    },
    deBroglie: {
      title: "de Broglie Model",
      description: "Electrons exhibit both particle and wave-like behavior.",
      limitations: "Does not explain the interaction of waves with each other.",
      successes: "Introduced the concept of matter waves.",
      evidence: "Electron diffraction experiments.",
      problem: {
        description: "Determine the de Broglie wavelength of an electron moving at 2.0 × 10⁶ m/s. Use λ = h / mv where h = 6.626 × 10⁻³⁴ J·s.",
        correctAnswer: 3.63e-10,
      },
    },
    quark: {
      title: "Quark Model",
      description: "Particles like protons and neutrons are made up of quarks.",
      limitations: "Does not yet unify all fundamental forces.",
      successes: "Explains particle interactions at a deeper level.",
      evidence: "High-energy particle collisions.",
      problem: {
        description: "Calculate the total charge of a proton made of two 'up' quarks (+2/3e each) and one 'down' quark (-1/3e).",
        correctAnswer: 1.0,
      },
    },
  };
  
  function openModel(model) {
    const modal = document.getElementById("modal");
    const data = models[model];
  
    document.getElementById("model-title").innerText = data.title;
    document.getElementById("model-description").innerText = data.description;
    document.getElementById("model-limitations").innerText = data.limitations;
    document.getElementById("model-successes").innerText = data.successes;
    document.getElementById("model-evidence").innerText = data.evidence;
  
    const problem = data.problem;
    document.getElementById("problem-description").innerText = problem.description;
    document.getElementById("problem-input").value = "";
    document.getElementById("problem-result").innerText = "";
    modal.dataset.correctAnswer = problem.correctAnswer;
  
    modal.classList.remove("hidden");
  }
  
  function closeModel() {
    const modal = document.getElementById("modal");
  
    // Clear all modal content on close
    document.getElementById("model-title").innerText = "";
    document.getElementById("model-description").innerText = "";
    document.getElementById("model-limitations").innerText = "";
    document.getElementById("model-successes").innerText = "";
    document.getElementById("model-evidence").innerText = "";
    document.getElementById("problem-description").innerText = "";
    document.getElementById("problem-result").innerText = "";
  
    modal.classList.add("hidden");
  }
  
  function checkAnswer() {
    const modal = document.getElementById("modal");
    const userAnswer = parseFloat(document.getElementById("problem-input").value);
    const correctAnswer = parseFloat(modal.dataset.correctAnswer);
  
    const result = document.getElementById("problem-result");
    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
      result.innerText = "Correct!";
      result.style.color = "green";
    } else {
        result.innerText = "Incorrect. Try again.";
        result.style.color = "red";
      }
    }
