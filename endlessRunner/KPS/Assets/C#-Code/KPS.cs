using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KPS : MonoBehaviour
{
    
    void Start()
    {
        
    }
    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.A))
        {
            Debug.Log("ROCK");
        }
        else if (Input.GetKeyDown(KeyCode.S))
        {
            Debug.Log("Paper");
        }
        else if (Input.GetKeyDown(KeyCode.D))
        {
            Debug.Log("Siccors");
        }
    }
}
