using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OpponentKPS : MonoBehaviour
{
   // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            Debug.Log("p2 ROCK");
        }
        else if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            Debug.Log("p2 Paper");
        }
        else if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            Debug.Log("p2 Siccors");
        }
    }
}
