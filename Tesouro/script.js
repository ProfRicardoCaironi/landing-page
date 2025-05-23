function executarNoSandbox(codigo, variavelParaRetornar) {
  const sandbox = {};
  const func = new Function(
    "sandbox",
    `with(sandbox) {
      ${codigo}
      return ${variavelParaRetornar};
    }`
  );
  return func(sandbox);
}

function verificarEtapa1() {
  const entrada = document.getElementById("entrada1").value.trim();
  try {
    const valor = executarNoSandbox(entrada, "chave");
    if (valor === 42) {
      document.getElementById("etapa2").classList.remove("oculto");
      alert("✅ Etapa 1 correta!");
    } else {
      alert("❌ Valor incorreto para 'chave'.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}

function verificarEtapa2() {
  const entrada = document.getElementById("entrada2").value.trim();
  try {
    const valor = executarNoSandbox(entrada, "direcao");
    if (valor === "norte") {
      document.getElementById("etapa3").classList.remove("oculto");
      alert("✅ Etapa 2 correta!");
    } else {
      alert("❌ Valor incorreto para 'direcao'.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}

function verificarEtapa3() {
  const entrada = document.getElementById("entrada3").value.trim();
  try {
    const valor = executarNoSandbox(entrada, "x");
    if (valor + 5 === 12) {
      document.getElementById("etapa4").classList.remove("oculto");
      alert("✅ Etapa 3 correta!");
    } else {
      alert("❌ Valor incorreto para 'x'.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}

function verificarEtapa4() {
  const entrada = document.getElementById("entrada4").value.trim();
  try {
    const sandbox = {};
    const func = new Function(
      "sandbox",
      `with(sandbox) {
        ${entrada}
        return verificarCodigo(1234);
      }`
    );
    const resultado = func(sandbox);
    if (resultado === true) {
      document.getElementById("etapa5").classList.remove("oculto");
      alert("✅ Etapa 4 correta!");
    } else {
      alert("❌ Função incorreta.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}

function verificarEtapa5() {
  const entrada = document.getElementById("entrada5").value.trim();
  try {
    const valor = executarNoSandbox(entrada, "resultado");
    if (valor === 22) {
      document.getElementById("etapa6").classList.remove("oculto");
      alert("✅ Etapa 5 correta!");
    } else {
      alert("❌ Resultado incorreto.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}

function verificarEtapa6() {
  const entrada = document.getElementById("entrada6").value.trim();
  try {
    const sandbox = {};
    const func = new Function(
      "sandbox",
      `with(sandbox) {
        ${entrada}
        return autorizado;
      }`
    );
    const valor = func(sandbox);
    if (valor === true) {
      document.getElementById("etapa7").classList.remove("oculto");
      alert("✅ Etapa 6 correta!");
    } else {
      alert("❌ Lógica incorreta.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}

function verificarEtapa7() {
  const entrada = document.getElementById("entrada7").value.trim();
  try {
    const valor = executarNoSandbox(entrada, "tipo");
    if (valor === "number") {
      document.getElementById("etapa8").classList.remove("oculto");
      alert("✅ Etapa 7 correta!");
    } else {
      alert("❌ Tipo de dado incorreto.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}

function verificarEtapa8() {
  const entrada = document.getElementById("entrada8").value.trim();
  try {
    const valor = executarNoSandbox(entrada, "acesso");
    if (valor === true) {
      document.getElementById("final").classList.remove("oculto");
      alert("🏆 Parabéns! Você completou todos os desafios!");
    } else {
      alert("❌ Verifique os operadores lógicos.");
    }
  } catch (e) {
    alert("❌ Erro de sintaxe.");
  }
}
