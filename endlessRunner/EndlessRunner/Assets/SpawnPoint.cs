using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnPoint : MonoBehaviour
{

    public GameObject enemyobstacle;

    // Start is called before the first frame update
    void Start()
    {
        Instantiate(enemyobstacle, transform.position, Quaternion.identity);
    }


}
