using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class destroyBehind : MonoBehaviour
{

    public int score;
    public Text ScoreDisplay;

    private void Update() {
        ScoreDisplay.text = score.ToString();
    }
    private void OnTriggerEnter2D(Collider2D other) {
        if (other.CompareTag("Enemy"))
        {
            score++;
            Debug.Log(score);
        }
    }
}
