﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyBehaviour : MonoBehaviour
{
    public int damage = 1;
    public GameObject effect;
    public int speed;
    
  

    void Update()
    {
        

        transform.Translate(Vector2.left * speed * Time.deltaTime);
      

    }

    void OnTriggerEnter2D(Collider2D other) {
        if (other.CompareTag("Player"))
        {
           
            Instantiate(effect, transform.position, Quaternion.identity);
            other.GetComponent<player>().currentHealth -= damage;
            Destroy(gameObject);
            
        }  

        if (other.CompareTag("Enemy"))
        {
           
            Instantiate(effect, transform.position, Quaternion.identity);
            
            Destroy(gameObject);

            
        }  
    }
}
