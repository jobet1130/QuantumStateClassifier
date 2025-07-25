# 🧠 Quantum State Classification using Classical Machine Learning

This project investigates the use of classical machine learning models to classify quantum states as either **entangled** or **separable**. By simulating quantum states and extracting features from their density matrices, we develop models capable of learning patterns in quantum entanglement using interpretable, reproducible techniques.

---

## 🎯 Project Goals

- Simulate pure and mixed two-qubit quantum states using quantum computing frameworks like Qiskit.
- Label states based on entanglement criteria using the **Peres–Horodecki (PPT)** condition.
- Engineer classical features from quantum states (purity, entropy, eigenvalues, etc.).
- Train and evaluate machine learning models to classify quantum states.
- Interpret results with SHAP, LIME, and feature importance techniques.
- Compare performance across different ML algorithms.

---

## 🧪 Quantum Concepts Involved

| Concept                 | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Density Matrix (ρ)** | Represents both pure and mixed quantum states in a statistical form.        |
| **Purity (Tr(ρ²))**    | Indicates whether a state is pure or mixed. Pure states have purity = 1.   |
| **Von Neumann Entropy**| Measures the degree of mixedness of a quantum state.                       |
| **Entanglement**       | Quantum correlation that cannot be explained classically.                  |
| **PPT Criterion**      | A test for separability using the partial transpose of the density matrix. |

---

## 📚 Feature Engineering

The following features are extracted from simulated quantum states:

- **Purity**  
- **Von Neumann Entropy**  
- **Eigenvalue Spectrum**  
- **Partial Transpose Minimum Eigenvalue**  
- **Trace Distance to Maximally Mixed State**  
- **State Rank**  
- **Frobenius Norm**

These features are used as classical inputs to machine learning models.

---

## 🤖 Machine Learning Pipeline

1. **Data Generation** – Quantum states simulated and labeled using Peres–Horodecki test.
2. **Feature Extraction** – Classical numerical features extracted from quantum states.
3. **Data Preprocessing** – Standardization, outlier handling, and feature selection.
4. **Model Training** – Using algorithms like:
   - Support Vector Machines (SVM)
   - Random Forest
   - XGBoost
   - LightGBM
   - Logistic Regression (baseline)
5. **Hyperparameter Optimization** – Performed using **Optuna** or **GridSearchCV**.
6. **Evaluation** – Accuracy, F1 Score, Precision, Recall, ROC AUC.
7. **Interpretability** – SHAP, LIME, and permutation importance.
8. **Deployment** – Optional API serving using FastAPI or Flask.
---
## 📦 Installation
Clone this repository:
```bash
git clone https://github.com/jobet1130/QuantumStateClassifier.git
cd quantum-state-classification
```
Create a Virtual Environment:
```bash
python -m venv .venv
source .venv\bin\activate for MacOS and Linux
.venv\Scripts\activate for Windows
```
Install dependencies:
```bash
pip install -r requirements.txt
```
---
# 🚀 How to Use
1. Run the Notebooks in Order
Start from 01_data_generation.ipynb up to the final evaluation/deployment notebooks.

2. Customize Simulation Parameters
In 01_data_generation.ipynb, adjust the number of samples, state purity, or randomness.

3. Train and Evaluate Models
Use notebooks 05_model_training.ipynb and 06_model_evaluation.ipynb to see performance.

4. Interpret Results
08_model_interpretability.ipynb provides visual insights into how the model makes decisions.

5. Deploy the Model (Optional)
Use 11_deployment.ipynb or the API script to host the model.
---
# 📈 Expected Results
- Achieve over 90% classification accuracy in distinguishing entangled vs. separable states.

- Visualize how each quantum feature contributes to classification using SHAP.

- Export trained models (.pkl) and evaluation reports (.csv, .json).
---
# 📌 Dependencies
- qiskit
- numpy, scipy, pandas
- scikit-learn
- matplotlib, seaborn
- shap, lime
- optuna, xgboost, lightgbm
- joblib, tqdm
- fastapi (optional for deployment)

install all via requirements.txt

----

# 🛡️ Limitations
- Simulated quantum states may not perfectly reflect real noisy quantum hardware behavior.

- Classification is binary: entangled vs. separable — does not account for different types of entanglement (e.g., W vs. GHZ states).

- Does not use quantum machine learning (QML) techniques (this is classical ML on quantum data).

---

# 🧭 Future Work
- Extend to multi-qubit or continuous-variable states.

- Integrate real quantum data from **IBM Quantum** or **IonQ**.

- Add a **quantum kernel classifier** using **Qiskit Machine Learning**.

- Benchmark against **quantum-enhanced models**.

---

# 👨‍💻 Contribution Guide
Contributions are welcome! Please:
1. Fork the repo and clone it.

2. Create a new branch: git checkout -b feature-name.

3. Commit your changes and push: git push origin feature-name.

4. Open a pull request and describe your changes.

---

# 📚 References

- Nielsen & Chuang, *Quantum Computation and Quantum Information*
- [IBM Qiskit Documentation](https://qiskit.org/documentation/)
- [SHAP Documentation](https://shap.readthedocs.io/en/latest/)
- [Optuna Documentation](https://optuna.org/)
- [Scikit-learn Documentation](https://scikit-learn.org/stable/)

---

# 🧑 Author
**Jobet P. Casquejo**
📫 [https://github.com/jobet1130]

---