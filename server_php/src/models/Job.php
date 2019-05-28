<?php
/**
 * @Entity @Table(name="work_history")
 **/
class Job implements JsonSerializable
{
    /** @Id @Column(type="integer") @GeneratedValue **/
    protected $id;

    /** @Column(type="string") **/
    protected $business_name;
 
    /** @Column(type="string") **/
    protected $job_title;

    /** @Column(type="string", nullable=true) **/
    protected $job_description;

    /** @Column(type="string") **/
    protected $location;

    /** @Column(type="date") **/
    protected $start_date;

    /** @Column(type="date", nullable=true) **/
    protected $end_date;

    public function getId()
    {
        return $this->id;
    }

    public function getBusinessName()
    {
        return $this->business_name;
    }

    public function setBusinessName($name)
    {
        $this->business_name = $name;
    }

    public function getJobTitle()
    {
        return $this->job_title;
    }

    public function setJobTitle($job_title)
    {
        $this->job_title = $job_title;
    }

    public function getJobDescription()
    {
        return $this->job_description;
    }

    public function setJobDescription($job)
    {
        $this->job_description = $job;
    }

    public function getLocation()
    {
        return $this->location;
    }

    public function setLocation($location)
    {
        $this->location = $location;
    }

    public function getStartDate()
    {
        return $this->start_date;
    }

    public function setStartDate($date)
    {
        $this->start_date = $date;
    }

    public function getEndDate()
    {
        return $this->end_date;
    }

    public function setEndDate($date)
    {
        $this->end_date = $date;
    }

    public function jsonSerialize() 
    {
        $json = array();
        foreach($this as $key => $value) 
        {
            $json[$key] = $value;
        }
        return $json; // or json_encode($json)
    }
}