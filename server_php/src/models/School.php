<?php
/**
 * @Entity @Table(name="education")
 **/
class School implements JsonSerializable
{
    /** @Id @Column(type="integer") @GeneratedValue **/
    protected $id;

    /** @Column(type="string") **/
    protected $school_name;

    /** @Column(type="string") **/
    protected $location;

    /** @Column(type="string") **/
    protected $major;

    /** @Column(type="integer") **/
    protected $graduation_year;

    public function getId()
    {
        return $this->id;
    }

    public function getSchoolName()
    {
        return $this->school_name;
    }

    public function setSchoolName($school)
    {
        $this->school_name = $school;
    }

    public function getlocation()
    {
        return $this->location;
    }

    public function setlocation($location)
    {
        $this->location = $location;
    }

    public function getMajor()
    {
        return $this->major;
    }

    public function setMajor($major)
    {
        $this->major = $major;
    }

    public function getGraduationYear()
    {
        return $this->graduation_year;
    }

    public function setGraduationYear($year)
    {
        $this->graduation_year = $year;
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