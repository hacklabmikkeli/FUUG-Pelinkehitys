using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player : MonoBehaviour
{
  
    private Vector2 targetPos;
    public float Yincrement;

    public float speed;

    public float maxHeight;
    public float minHeight;

 
    //health

    public int health = 3;
    public GameObject effect;

    public int currentHealth;

    public HealthBar healthBar;

    public GameObject gameOver;

    void Start()
    {
        currentHealth = health; 
        healthBar.SetMAxHealth(health);   
    }

    // Update is called once per frame
    void Update()
    {
        if (currentHealth <= 0)
        {
            
            Instantiate(effect, transform.position, Quaternion.identity);
            gameOver.SetActive(true);  
            Destroy(gameObject);
        }

        if (currentHealth >= 3)
        {
             currentHealth = 3;
        }
       
        transform.position = Vector2.MoveTowards(transform.position, targetPos, speed * Time.deltaTime);   
        if (Input.GetKeyDown(KeyCode.UpArrow) && transform.position.y < maxHeight)
        {
            targetPos = new Vector2( transform.position.x , transform.position.y +  Yincrement); 
            
                 
        }    else if (Input.GetKeyDown(KeyCode.DownArrow) && transform.position.y > minHeight)
        {
            
            targetPos = new Vector2( transform.position.x , transform.position.y - Yincrement);
                 
        }
        healthBar.SetHealth(currentHealth);
        
    }

    
    
}
